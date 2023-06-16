package happypet.services;
import java.util.List;
import happypet.entities.Categoria;
import happypet.entities.Producto;
import happypet.repositories.CategoriaRepository;
import happypet.repositories.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductoService {

	@Autowired
	private ProductoRepository productoRepository;

	@Autowired
	private CategoriaRepository categoriaRepository;
	
	public List<Producto> getProductos() {
		return productoRepository.findAll();
	}
	
	public Producto saveProducto(Producto producto) throws Exception {
		Categoria categoria = categoriaRepository.getById(producto.getCategoria().getId());
		categoria.getProducto().add(producto);
				
		if (producto.getNombre().equals("") ||
				producto.getDescripcion().equals("") ||
				producto.getPrecio().equals("")) {
			throw new Exception("El producto no se puede crear. Datos incorrectos");
		}
	
		productoRepository.save(producto);
		return producto;
	}
	
	public Producto getProductoId(Long id) {
		return productoRepository.findById(id).get();
	}
	
	public Producto updateProducto(
			Long idProducto,
			Producto producto
			) throws Exception {
		
		Producto productoActualizado = productoRepository.findById(idProducto).get();
		productoActualizado.setNombre(producto.getNombre());
		productoActualizado.setDescripcion(producto.getDescripcion());
		productoActualizado.setPrecio(producto.getPrecio());
		
		/*Categoria categoria = categoriaRepository.getById(idCategoria);
		producto.setCategoria(categoria);
		categoria.getProducto().add(producto);*/
		
	
		try {
			productoRepository.saveAndFlush(productoActualizado);
		}
		catch (Exception e) {
			throw new Exception("Error al completar su solicitud");
		}
		return producto;
	}

	public void deleteProducto(Long idProducto) {
		Producto producto = productoRepository.findById(idProducto).get();
		productoRepository.delete(producto);
	}
	
	
	public List<Producto> getProductosPorCategoria(Long categoriaId) {
        return productoRepository.findProductosByCategoria(categoriaId);
    }
	
	
	
	
	
	
}

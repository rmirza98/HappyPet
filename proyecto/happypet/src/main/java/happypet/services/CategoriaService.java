package happypet.services;

import java.util.List;
import happypet.entities.Categoria;
import happypet.entities.Producto;
import happypet.repositories.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoriaService {

	@Autowired
	private CategoriaRepository categoriaRepository;
	
	public List<Categoria> getCategorias() {
		return categoriaRepository.findAll();
	}
	
	public Categoria saveCategoria (Categoria categoria) throws Exception {
		
				
		if (categoria.getNombre().equals("")) {
			throw new Exception("La categoria no se puede crear. Datos incorrectos");
		}
	
		categoriaRepository.save(categoria);
		return categoria;
	}
	
	public Categoria getCategoriaId(Long id) {
		return categoriaRepository.findById(id).get();
	}
	
	
	public Categoria updateCategoria(Long idCategoria, Categoria categoria) throws Exception {
		try {
				Categoria nuevaCategoria = categoriaRepository.findById(idCategoria).get();
				nuevaCategoria.setNombre(categoria.getNombre());
				categoriaRepository.saveAndFlush(nuevaCategoria);
		}
		catch (Exception e) {
			throw new Exception("Error al completar su solicitud");
		}
		return categoria;
	}

	public void deleteCategoria(Long idCategoria) {
		Categoria categoria = categoriaRepository.findById(idCategoria).get();
		categoriaRepository.delete(categoria);
	}
	
	
	
	
	
	
	
}

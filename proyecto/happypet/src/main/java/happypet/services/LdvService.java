package happypet.services;
import java.util.List;
import java.util.Optional;

import happypet.entities.Categoria;
import happypet.entities.Ldv;
import happypet.entities.Producto;
import happypet.entities.Venta;
import happypet.repositories.CategoriaRepository;
import happypet.repositories.LdvRepository;
import happypet.repositories.ProductoRepository;
import happypet.repositories.VentaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LdvService {

	@Autowired
	private LdvRepository ldvRepository;

	@Autowired
	private ProductoRepository productoRepository;
	
	@Autowired
	private VentaRepository ventaRepository;
	
	public List<Ldv> getLdvs() {
		
		return ldvRepository.findAll();
	}
	
	
	public List<Ldv> getLdvsNull() {
		
		return ldvRepository.findByVentaIdIsNull();
	}
	public Ldv saveLdv(Long idProducto,Ldv ldv) throws Exception {
		Producto producto = productoRepository.getById(idProducto);
		producto.getLdvs().add(ldv);
		ldv.setProduct(producto);
		/*Venta venta = ventaRepository.getById(ldv.getVenta().getId());
		venta.getLdvs().add(ldv);*/
				
		if (ldv.getCantidad().equals("0") || ldv.getCantidad().equals("")) {
			throw new Exception("La linea de venta no se puede crear. Datos incorrectos");
		}
		
		
	
		ldvRepository.save(ldv);
		return ldv;
	}
	
	public Ldv getLdvId(Long id) {
		return ldvRepository.findById(id).get();
	}
	
	public Ldv updateLdv(Long idLdv,Ldv ldv) throws Exception {
		try {
			Ldv ldvActualizado = ldvRepository.findById(idLdv).get();
			ldvActualizado.setCantidad(ldv.getCantidad());
	
		
			//ldv.setId(idLdv);
			ldvRepository.saveAndFlush(ldvActualizado);
		}
		catch (Exception e) {
			throw new Exception("Error al completar su solicitud");
		}
		return ldv;
	}

	public void deleteLdv(Long idLdv) {
		Ldv ldv = ldvRepository.findById(idLdv).get();
		ldvRepository.delete(ldv);
	}
}

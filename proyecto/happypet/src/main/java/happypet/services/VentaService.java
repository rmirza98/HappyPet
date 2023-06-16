package happypet.services;
import java.util.List;
import happypet.entities.Categoria;
import happypet.entities.Ldv;
import happypet.entities.Producto;
import happypet.entities.Usuario;
import happypet.entities.Venta;
import happypet.repositories.CategoriaRepository;
import happypet.repositories.LdvRepository;
import happypet.repositories.ProductoRepository;
import happypet.repositories.UsuarioRepository;
import happypet.repositories.VentaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VentaService {

	@Autowired
	private VentaRepository ventaRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private LdvRepository ldvRepository;
	@Autowired
	private UsuarioService usuarioService;
	
	public List<Venta> getVentas() {
		return ventaRepository.findAll();
	}
	
	public List<Venta> getVentasLogin() {
		Usuario usuario = usuarioService.getLogin();
		return ventaRepository.findVentasWithMatchingHistoricoIdAndUserId(usuario.getId());
	}
	
	
	
	public Venta saveVenta(Long idUsuario, Venta venta) throws Exception {
	    List<Ldv> ldvs = ldvRepository.findByVentaIdIsNull();

	    if (ldvs.isEmpty()) {
	        throw new Exception("No hay Ldvs disponibles para asociar a la venta");
	    }
	    venta.setLdvs(ldvs);
	    for (Ldv ldv : ldvs) {
	        //venta.getLdvs().add(ldv);
	        ldv.setVenta(venta);
	    }

	    Usuario usuario = usuarioRepository.getById(idUsuario);
	    usuario.getVentas().add(venta);
	    venta.setHistorico(usuario);

	    ventaRepository.save(venta);
	    return venta;
	}

		
	
	
	
	
	public Venta getVentaId(Long id) {
		return ventaRepository.findById(id).get();
	}
	
	public Venta updateVenta(Long idVenta,Venta venta) throws Exception {
	
		try {
			venta.setId(idVenta);
			ventaRepository.saveAndFlush(venta);
		}
		catch (Exception e) {
			throw new Exception("Error al completar su solicitud");
		}
		return venta;
	}
	

	public void deleteVenta(Long idVenta) {
		Venta venta = ventaRepository.findById(idVenta).get();
		ventaRepository.delete(venta);
	}
}

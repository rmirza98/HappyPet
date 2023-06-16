package happypet.services;

import java.util.List;
import java.util.Optional;

import happypet.entities.Login;
import happypet.entities.Usuario;
import happypet.repositories.LoginRepository;
import happypet.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;
	@Autowired
	private LoginRepository loginRepository;

	
	public List<Usuario> getUsuarios() {
		return usuarioRepository.findAll();
	}
	public Usuario getLogin() {
		Optional<Login> login= loginRepository.findById((long) 1);
	    Usuario usuario = usuarioRepository.findByNombre(login.get().getNombre());	

		return usuario;
	}
	
	
	public Login getUsuario(Login login) throws Exception {
	    Usuario usuario = usuarioRepository.findByNombre(login.getNombre());	
	    System.out.println(usuario.getNombre());
	    try {
	    	if (usuario != null && usuario.getPwd().equals(login.getPwd())) {
	   	     
	    	    login.setId((long) 1);
		        loginRepository.save(login);
		    }
		}
		catch (Exception e) {
			throw new Exception("Usuario " + usuario.getNombre() + " no encontrado");
		}
	    return login;
	}

	
	
	public Usuario getUsuarioId(Long id) {
		return usuarioRepository.findById(id).get();
	}
	
	
	//, Long[] pedidos, Long[] carritos, Long[] comentarios  pendiente 
	public Usuario updateUsuario(Long id,Usuario usuario ) throws Exception {
		/*Usuario usuario = usuarioRepository.findById(idUsuario).get();
		usuario.setNombre(nombre);
		usuario.setCorreo(correo);
		usuario.setDireccion(direccion);
		usuario.setTelefono(telefono);
		usuario.setPassword(password);
		
		
		Collection<Carrito> NuevoCarrito = new ArrayList<Carrito>();
		for (Long carrito : carritos){
			NuevoCarrito.add(carritoRepository.getById(carrito));
		}
		usuario.setCarritos(NuevoCarrito);*/
	
		
		try {
			usuario.setId(id);
			usuarioRepository.saveAndFlush(usuario);
		}
		catch (Exception e) {
			throw new Exception("Usuario " + usuario.getNombre() + " duplicado");
		}
		return usuario;
	}

	public void deleteUsuario(Long idUsuario) {
		Usuario usuario = usuarioRepository.findById(idUsuario).get();
		usuarioRepository.delete(usuario);
	}

	public Usuario saveUsuarios(Usuario usuario) {
		usuarioRepository.save(usuario);
		Login login =new Login();
	    login.setId((long) 1);
	    login.setNombre(usuario.getNombre());
	    login.setPwd(usuario.getPwd());
		loginRepository.save(login);

		return usuario;
	}
	
	public void cerrarSesion() {
		Login login = new Login();
		login.setId((long) 1);
		login.setNombre(null);
		login.setPwd(null);
		loginRepository.save(login);
	
	}
	
	
	
}

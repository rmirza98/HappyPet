package happypet.services;


import java.util.List;

import happypet.entities.Comentario;
import happypet.entities.Producto;
import happypet.entities.Usuario;
import happypet.repositories.ComentarioRepository;
import happypet.repositories.ProductoRepository;
import happypet.repositories.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ComentarioService {

	@Autowired
	private ComentarioRepository comentarioRepository;

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private ProductoRepository productoRepository;
	
	public List<Comentario> getComentarios() {
		return comentarioRepository.findAll();
	}
	
	public List<Comentario> getComentariosProducto(Long idProducto) {
		return comentarioRepository.comentarioProductos(idProducto);
		
	}

	
	/*public List<Comentario> getComentarioByIdProducto(Long idProducto) {
		return productoRepository.comentarioProductos(idProducto);
	}
	*/
	public List<Comentario> getComentarioByIdUsuario(Long idUsuario) {
		return comentarioRepository.comentarioUsuarios(idUsuario);
	}
	
	public Comentario saveComentario(Long idProducto, Long idUsuario,Comentario comentario ) throws Exception {
			
		Usuario usuario = usuarioRepository.getById(idUsuario);
		usuario.getComentarios().add(comentario);
		comentario.setUsuario(usuario);
		
		Producto producto = productoRepository.getById(idProducto);
		producto.getComentarios().add(comentario);
		comentario.setProducto(producto);
		
		if (comentario.getTexto().equals("")) {
			throw new Exception("El comentario no puede estar vacio");
		}
	
		comentarioRepository.save(comentario);
		return comentario;
	}
	
	public Comentario getComentarioById(Long id) {
		return comentarioRepository.findById(id).get();
	}
	
	
	public Comentario updateComentario(Long idComentario, String texto) throws Exception {
		Comentario comentario = comentarioRepository.findById(idComentario).get();
		comentario.setTexto(texto);
	
		try {
			comentarioRepository.saveAndFlush(comentario);
		}
		catch (Exception e) {
			throw new Exception("Error al completar su solicitud");
		}
		return comentario;
	}

	public void deleteComentario(Long idComentario) {
		Comentario comentario = comentarioRepository.findById(idComentario).get();
		comentarioRepository.delete(comentario);
	}
}

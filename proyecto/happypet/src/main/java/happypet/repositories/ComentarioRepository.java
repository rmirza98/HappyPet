package happypet.repositories;

import happypet.entities.Comentario;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ComentarioRepository extends JpaRepository<Comentario, Long> {
	@Query("select c from Comentario c where c.usuario.id=:id")
	List<Comentario> comentarioUsuarios(@Param("id") Long idUIsuario);
	
	
	@Query("SELECT c FROM Comentario c WHERE c.producto.id = :id")
	List<Comentario> comentarioProductos(@Param("id") Long idProducto);

}

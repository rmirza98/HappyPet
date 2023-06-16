package happypet.repositories;


import java.util.Optional;
import happypet.entities.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	  void deleteUsuarioById(Long id);

	    Optional<Usuario> findUsuarioById(Long id);
	    
	    //Método para poder buscar un usuario mediante su nombre
	    Usuario findByNombre(String nombre);

	    //Método para poder verificar si un usuario existe en nuestra base de datos
	    Boolean existsByNombre(String nombre);
	
}

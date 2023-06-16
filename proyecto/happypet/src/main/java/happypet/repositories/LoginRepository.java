package happypet.repositories;

import happypet.entities.Categoria;
import happypet.entities.Login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LoginRepository extends JpaRepository<Login, Long> {
	

	
}

package happypet.repositories;

import happypet.entities.Categoria;
import happypet.entities.Producto;
import happypet.entities.Venta;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
	

	
}

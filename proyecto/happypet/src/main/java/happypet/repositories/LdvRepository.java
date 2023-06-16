package happypet.repositories;

import happypet.entities.Categoria;
import happypet.entities.Ldv;
import happypet.entities.Usuario;
import happypet.entities.Venta;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LdvRepository extends JpaRepository<Ldv, Long> {
	
	@Query("SELECT ldv FROM Ldv ldv WHERE ldv.venta IS NULL")
    List<Ldv> findByVentaIdIsNull();
	
}

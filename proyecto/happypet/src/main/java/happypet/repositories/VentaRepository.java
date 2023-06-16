package happypet.repositories;

import happypet.entities.Categoria;
import happypet.entities.Usuario;
import happypet.entities.Venta;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface VentaRepository extends JpaRepository<Venta, Long> {
	
	@Query("SELECT v FROM Venta v WHERE v.historico.id = :historicoId")
    List<Venta> findVentasWithMatchingHistoricoIdAndUserId(@Param("historicoId") Long historicoId);


}

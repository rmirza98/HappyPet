package happypet.repositories;

import happypet.entities.Comentario;
import happypet.entities.Producto;
import happypet.entities.Venta;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductoRepository extends JpaRepository<Producto, Long> {

	@Query("SELECT p FROM Producto p WHERE p.categoria.id = :idCategoria")
    List<Producto> findProductosByCategoria(@Param("idCategoria") Long idCategoria);

	
}

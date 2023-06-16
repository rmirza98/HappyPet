package happypet.dto.rest;

import java.util.List;

import happypet.entities.Producto;
import happypet.entities.Venta;
import happypet.services.ProductoService;
import happypet.services.VentaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/venta")

public class VentaRestController {
	@Autowired 
	private  VentaService ventaService;

   /* public void UsuarioService(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }*/

    @GetMapping("")
    public ResponseEntity<List<Venta>> getVentas () {
        List<Venta> ventas = ventaService.getVentasLogin();
        return new ResponseEntity<>(ventas, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Venta> getVentaById (@PathVariable("id") Long id) {
    	Venta venta = ventaService.getVentaId(id);
        return new ResponseEntity<>(venta, HttpStatus.OK);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Venta> addVenta(@PathVariable("id") Long id,@RequestBody Venta venta) throws Exception {
    	Venta nuevaVenta = ventaService.saveVenta(id,venta);
        return new ResponseEntity<>(nuevaVenta, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Venta> updateVenta(@PathVariable Long idVenta,
			@RequestBody Venta venta) throws Exception {
    	Venta updateVenta = ventaService.updateVenta(idVenta,venta);
        return new ResponseEntity<>(updateVenta, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteVenta(@PathVariable("id") Long id) {
    	ventaService.deleteVenta(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

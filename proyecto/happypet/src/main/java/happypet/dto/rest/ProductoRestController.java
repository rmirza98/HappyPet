package happypet.dto.rest;

import java.util.List;

import happypet.entities.Producto;
import happypet.services.ProductoService;
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
@RequestMapping("/api/producto")

public class ProductoRestController {
	@Autowired 
	private  ProductoService productoService;

   /* public void UsuarioService(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }*/

    @GetMapping("")
    public ResponseEntity<List<Producto>> getProductos () {
        List<Producto> productos = productoService.getProductos();
        return new ResponseEntity<>(productos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Producto> getProductoById (@PathVariable("id") Long id) {
    	Producto producto = productoService.getProductoId(id);
        return new ResponseEntity<>(producto, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Producto> addProducto(@RequestBody Producto producto) throws Exception {
    	Producto nuevoProducto = productoService.saveProducto(producto);
        return new ResponseEntity<>(nuevoProducto, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Producto> updateProducto(@PathVariable Long id,@RequestBody Producto producto) throws Exception {
    	Producto updateProducto = productoService.updateProducto(id,producto);
        return new ResponseEntity<>(updateProducto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUsuario(@PathVariable("id") Long id) {
    	productoService.deleteProducto(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    
    @GetMapping("/por-categoria/{categoriaId}")
    public ResponseEntity<List<Producto>> getProductosPorCategoria(@PathVariable Long categoriaId) {
        List<Producto> productos = productoService.getProductosPorCategoria(categoriaId);
        return ResponseEntity.ok(productos);
    }
    
}

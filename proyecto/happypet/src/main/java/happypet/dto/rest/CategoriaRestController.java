package happypet.dto.rest;

import java.util.List;
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

import happypet.entities.Categoria;
import happypet.entities.Producto;
import happypet.services.CategoriaService;


@RestController
@RequestMapping("/api/categoria")

public class CategoriaRestController {
	@Autowired 
	private  CategoriaService categoriaService;

   /* public void UsuarioService(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }*/

    @GetMapping("")
    public ResponseEntity<List<Categoria>> getCategorias () {
        List<Categoria> categorias = categoriaService.getCategorias();
        return new ResponseEntity<>(categorias, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categoria> getCategoriaById (@PathVariable("id") Long id) {
    	Categoria categoria = categoriaService.getCategoriaId(id);
        return new ResponseEntity<>(categoria, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Categoria> addCategoria(@RequestBody Categoria categoria) throws Exception {
    	Categoria nuevaCategoria = categoriaService.saveCategoria(categoria);
        return new ResponseEntity<>(nuevaCategoria, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Categoria> updateCategoria(@PathVariable Long id,@RequestBody Categoria categoria) throws Exception {
    	Categoria updateCategoria = categoriaService.updateCategoria(id, categoria);
        return new ResponseEntity<>(updateCategoria, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategoria(@PathVariable("id") Long id) {
    	categoriaService.deleteCategoria(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
 
    
    
}

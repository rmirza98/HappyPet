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
import happypet.entities.Comentario;
import happypet.services.ComentarioService;

@RestController
@RequestMapping("/api/comentario")

public class ComentarioRestController {
	@Autowired 
	private  ComentarioService comentarioService;

    @GetMapping("/all")
    public ResponseEntity<List<Comentario>> getComentarios () {
        List<Comentario> comentarios = comentarioService.getComentarios();
        return new ResponseEntity<>(comentarios, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Comentario> getComentarioById (@PathVariable("id") Long id) {
    	Comentario comentario = comentarioService.getComentarioById(id);
        return new ResponseEntity<>(comentario, HttpStatus.OK);
    }
    
    
    @GetMapping("{id}")
    public ResponseEntity<List<Comentario>> getComentarioByProducto(@PathVariable("id") Long id) {
        List<Comentario> comentarios = comentarioService.getComentariosProducto(id);
        return new ResponseEntity<>(comentarios, HttpStatus.OK);
    }
    
    
   @GetMapping("/find/usuario{id}")
    public ResponseEntity<List<Comentario>> getComentarioByUsuarioId (@PathVariable("id") Long id) {
    	List<Comentario> comentarios = comentarioService.getComentarioByIdUsuario(id);
        return new ResponseEntity<>(comentarios, HttpStatus.OK);
    }
    
   /* @GetMapping("/find/producto-{id}")
    public ResponseEntity<List<Comentario>> getComentarioByProductoId (@PathVariable("id") Long id) {
    	List<Comentario> comentarios = comentarioService.getComentarioByIdProducto(id);
        return new ResponseEntity<>(comentarios, HttpStatus.OK);
    }*/
    
   @PostMapping("/{id}/{usuario}")
   public ResponseEntity<Comentario> addComentario(@PathVariable("id") Long id, @PathVariable("usuario") Long usuario, @RequestBody Comentario comentario) throws Exception {
       Comentario nuevoComentario = comentarioService.saveComentario(id, usuario, comentario);
       return new ResponseEntity<>(nuevoComentario, HttpStatus.CREATED);
   }


    @PutMapping("/update")
    public ResponseEntity<Comentario> updateComentario(@RequestParam Long idComentario, String texto) throws Exception {
    	Comentario updateComentario = comentarioService.updateComentario(idComentario, texto);
        return new ResponseEntity<>(updateComentario, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteComentario(@PathVariable("id") Long id) {
    	comentarioService.deleteComentario(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

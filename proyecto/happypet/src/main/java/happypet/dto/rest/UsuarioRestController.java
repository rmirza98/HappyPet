package happypet.dto.rest;

import java.util.List;

import happypet.entities.Login;
import happypet.entities.Usuario;
import happypet.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
//@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/usuario")

public class UsuarioRestController {
	@Autowired 
	private  UsuarioService usuarioService;

   /* public void UsuarioService(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }*/
	
    @GetMapping("")
    public ResponseEntity<List<Usuario>> getUsuarios () {
        List<Usuario> usuarios = usuarioService.getUsuarios();
        return new ResponseEntity<>(usuarios, HttpStatus.OK);
    }
    
    
    @PostMapping("/login")
    public ResponseEntity<Login> addLogin(@RequestBody Login login) throws Exception {
    	Login nuevoLogin = usuarioService.getUsuario(login);
        return new ResponseEntity<>(nuevoLogin, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuarioById (@PathVariable("id") Long id) {
    	Usuario usuario = usuarioService.getUsuarioId(id);
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }
    //@RequestParam String nombre, String correo, String direccion, String telefono, String password
    @PostMapping("")
    public ResponseEntity<Usuario> addUsuario(@RequestBody Usuario usuario) throws Exception {
    	Usuario nuevoUsuario = usuarioService.saveUsuarios(usuario);
        return new ResponseEntity<>(nuevoUsuario, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable Long id,@RequestBody Usuario usuario) throws Exception {
    	Usuario updateUsuario = usuarioService.updateUsuario(id,usuario);
        return new ResponseEntity<>(updateUsuario, HttpStatus.OK);
    }
   /* @PutMapping("{id}")
    public ResponseEntity<Usuario> updateUsuario(@RequestParam Long idUsuario,String nombre, String correo, String direccion, String telefono, String password) throws Exception {
    	Usuario updateUsuario = usuarioService.updateUsuario(idUsuario,nombre,correo,direccion,telefono,password);
        return new ResponseEntity<>(updateUsuario, HttpStatus.OK);
    }*/

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUsuario(@PathVariable("id") Long id) {
    	usuarioService.deleteUsuario(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    /*@DeleteMapping("/sesion")
    public void deleteLogin() {
    	usuarioService.deleteLogin();
    }*/
    
    @GetMapping("/sesion")
    public ResponseEntity<?> cerrarSesion() {
        usuarioService.cerrarSesion();
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    
    @GetMapping("/login")
    public ResponseEntity<Usuario> getlogin () {
    	Usuario usuario = usuarioService.getLogin();
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }
}

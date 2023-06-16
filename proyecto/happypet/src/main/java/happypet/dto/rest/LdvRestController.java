package happypet.dto.rest;

import java.util.List;

import happypet.entities.Ldv;
import happypet.entities.Producto;
import happypet.entities.Venta;
import happypet.services.LdvService;
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
@RequestMapping("/api/ldv")

public class LdvRestController {
	@Autowired 
	private  LdvService ldvService;

    @GetMapping("")
    public ResponseEntity<List<Ldv>> getLdv () {
        List<Ldv> ldv = ldvService.getLdvsNull();
        return new ResponseEntity<>(ldv, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Ldv> getLdvById (@PathVariable("id") Long id) {
    	Ldv ldv = ldvService.getLdvId(id);
        return new ResponseEntity<>(ldv, HttpStatus.OK);
    }

    @PostMapping("/{id}")
    public ResponseEntity<Ldv> addLdv(@PathVariable("id") Long id,@RequestBody Ldv ldv) throws Exception {
    	Ldv nuevaLdv = ldvService.saveLdv(id,ldv);
        return new ResponseEntity<>(nuevaLdv, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Ldv> updateLdv(@PathVariable Long id,@RequestBody Ldv ldv) throws Exception {
    	Ldv updateLdv = ldvService.updateLdv(id,ldv);
        return new ResponseEntity<>(updateLdv, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteLdv(@PathVariable("id") Long id) {
    	ldvService.deleteLdv(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

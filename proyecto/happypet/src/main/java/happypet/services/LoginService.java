package happypet.services;

import java.util.List;
import happypet.entities.Categoria;
import happypet.entities.Login;
import happypet.repositories.CategoriaRepository;
import happypet.repositories.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

	@Autowired
	private LoginRepository loginRepository;
	

	
	public Login saveLogin (Login login) throws Exception {
	
		loginRepository.save(login);
		return login;
	}
	
	

	
}

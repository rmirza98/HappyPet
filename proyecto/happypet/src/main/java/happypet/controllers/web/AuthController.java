package happypet.controllers.web;


import lombok.Data;

//Esta clase va a ser la que nos devolverá la información con el token y el tipo que tenga este
@Data
public class AuthController {
    private String accessToken;
    private String tokenType = "Bearer ";

    public AuthController(String accessToken) {
        this.accessToken = accessToken;
    }
}
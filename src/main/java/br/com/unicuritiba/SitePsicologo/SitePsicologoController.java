package br.com.unicuritiba.SitePsicologo;

import br.com.unicuritiba.SitePsicologo.models.Postagem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.unicuritiba.SitePsicologo.models.Postagem;
import br.com.unicuritiba.SitePsicologo.repositories.PostagemRepository;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
public class SitePsicologoController {

    @Autowired
    private PostagemRepository postagem;

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping("/postagens")
    public List<Postagem> findAll() {
        List<Postagem> result = postagem.findAll();
        return result;
    }

}

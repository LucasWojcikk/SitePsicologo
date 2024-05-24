package br.com.unicuritiba.SitePsicologo.controllers;


import br.com.unicuritiba.SitePsicologo.models.Postagem;
import br.com.unicuritiba.SitePsicologo.models.Psicologo;
import br.com.unicuritiba.SitePsicologo.repositories.PostagemRepository;
import br.com.unicuritiba.SitePsicologo.repositories.PsicologoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/psicologo")
public class PsicologoController {

    @Autowired
    private PsicologoRepository psicologo;

    @GetMapping
    public List<Psicologo> findAll() {
        List<Psicologo> result = psicologo.findAll();
        return result;
    }

    @PostMapping
    public Psicologo registerPsicologo(@RequestBody Psicologo psicologoData) {
        Psicologo newPsicologo = psicologo.save(psicologoData);
        return newPsicologo;
    }

    @PutMapping
    public Psicologo updatePsicologo(@RequestBody Psicologo psicologoData) {
        Psicologo updateDataPsicologo = psicologo.save(psicologoData);
        return updateDataPsicologo;
    }

    @DeleteMapping("/{id}")
    public String deletePsicologo (@PathVariable Long id){
        psicologo.deleteById(id);
        return ("Deletado com sucesso!");
    }

}

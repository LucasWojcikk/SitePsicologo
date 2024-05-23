package br.com.unicuritiba.SitePsicologo.models;
import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
public class Postagem {


    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(nullable = true)
    private Long id;

    @Column(nullable = true)
    private String titulo;

    @Column(nullable = true)
    private String resumo;

    @Column(columnDefinition = "TEXT", nullable = true)
    private String conteudo;

    @Column(nullable = true)
    private LocalDate dataPostagem;

    @Column(nullable = true)
    private String autor;

    // Getters e setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getResumo() {
        return resumo;
    }
    public void setResumo(String resumo) {
        this.resumo = resumo;
    }

    public String getConteudo() {
        return conteudo;
    }
    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }

    public LocalDate getDataPostagem() {
        return dataPostagem;
    }
    public void setDataPostagem(LocalDate dataPostagem) {
        this.dataPostagem = dataPostagem;
    }

    public String getAutor() {
        return autor;
    }
    public void setAutor(String autor) {
        this.autor = autor;
    }
}

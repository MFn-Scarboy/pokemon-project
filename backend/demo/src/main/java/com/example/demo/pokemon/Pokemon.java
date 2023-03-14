package com.example.demo.pokemon;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import javax.persistence.Id;

@JsonIgnoreProperties(ignoreUnknown = true)
@Document
public class Pokemon {

    @MongoId
    private String id;

    private String name;

    private String description;

    private String imageRef;

    public Pokemon(String id, String name, String description, String imageRef) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageRef = imageRef;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageRef() {
        return imageRef;
    }

    public void setImageRef(String imageRef) {
        this.imageRef = imageRef;
    }
}

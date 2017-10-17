package com.capgemini.MovieApp.model;

import org.hibernate.validator.constraints.Length;

import javax.persistence.*;
import javax.validation.Valid;

@Entity
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long movieId;

    @Valid
    @Length(max = 30, min = 1, message = "Title must be between 1 and 30 characters.")
    private String title;

    private boolean isViewed;

    public Movie() {
    }

    public Movie(String title, boolean isViewed) {
        this.title = title;
        this.isViewed = isViewed;
    }

    public long getMovieId() {
        return movieId;
    }

    public void setMovieId(long movieId) {
        this.movieId = movieId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public boolean isViewed() {
        return isViewed;
    }

    public void setViewed(boolean viewed) {
        isViewed = viewed;
    }

    @Override
    public String toString() {
        return String.format(
                "Guest[movieId=%d, title='%s', watched?='%s']",
                movieId, title, isViewed);
    }
}

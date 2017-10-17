package com.capgemini.MovieApp.repository;

import com.capgemini.MovieApp.model.Movie;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<Movie, Long> {
}

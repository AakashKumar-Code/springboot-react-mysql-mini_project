package com.AakashKumarCode.SpringBootBackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.AakashKumarCode.SpringBootBackend.model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

}

package com.AakashKumarCode.SpringBootBackend.Service;

import java.util.List;

import com.AakashKumarCode.SpringBootBackend.model.Student;

public interface StudentService {

	public Student saveStudent(Student student);

	public List<Student> getAllStudents();

}

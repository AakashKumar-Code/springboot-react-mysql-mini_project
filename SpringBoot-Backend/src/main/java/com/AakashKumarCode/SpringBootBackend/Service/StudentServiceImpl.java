package com.AakashKumarCode.SpringBootBackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AakashKumarCode.SpringBootBackend.Repository.StudentRepository;
import com.AakashKumarCode.SpringBootBackend.model.Student;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentRepository studentrepo;

	@Override
	public Student saveStudent(Student student) {
		return studentrepo.save(student);
	}

	@Override
	public List<Student> getAllStudents() {
		return studentrepo.findAll();
	}

}

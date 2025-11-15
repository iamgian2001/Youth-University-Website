package com.nc.nc_lms.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper=true)
@Entity
@Data
@Table(name = "admin")
public class Adminstrator extends User{

}

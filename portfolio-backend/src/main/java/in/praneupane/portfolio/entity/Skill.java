package in.praneupane.portfolio.entity;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;
    
@Entity
@Table(name = "skills")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Skill extends BaseEntity {

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String level;
}

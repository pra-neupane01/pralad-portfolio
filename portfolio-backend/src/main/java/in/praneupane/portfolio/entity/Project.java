package in.praneupane.portfolio.entity;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "projects")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Project extends BaseEntity {

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String githubUrl;

    @Column(nullable = false)
    private String liveUrl;

    @Column(nullable = false)
    private String imageUrl;

    @ElementCollection
    private List<String> technologies;
}

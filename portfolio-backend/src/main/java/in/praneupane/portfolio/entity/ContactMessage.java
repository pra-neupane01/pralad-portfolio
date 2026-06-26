package in.praneupane.portfolio.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Email;
import lombok.*;

@Table(name = "contact-messages")
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ContactMessage extends BaseEntity {
    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    @Email
    private String email;

    @Column(nullable = false)
    private String subject;

    @Column(nullable = false, length = 2000)
    private String message;
}

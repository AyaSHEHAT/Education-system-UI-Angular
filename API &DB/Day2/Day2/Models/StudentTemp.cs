using System.ComponentModel.DataAnnotations.Schema;

namespace Day2.Models
{
    public class StudentTemp
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int? Age { get; set; }
        public int DeptId { get; set; }

        [ForeignKey("DeptId")]
        public virtual DepartmentTemp DepartmentTemp { get; set; }
    }
    public class DepartmentTemp
    {
        public int Id { get; set; }
        public string DeptName { get; set; }
        public string  Loc { get; set; }
        public virtual List<Student> Students { get; set; } = new List<Student>();
    }
}

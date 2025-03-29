using System.ComponentModel.DataAnnotations;


namespace Proyectsoftware.Models
{

    public class RegisterViewModel
    {
        public string Usuario { get; set; }
        public string Correo { get; set; }
        public string Contraseña { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
    

    /* this class will handle the connection between the code and database 
    
    Migrations:
    process that compares the models and the db structure
    list the changes to be done so they match

    - dotnet ef migrations add <someName>
    - dotnet ef database update
    */
    

namespace PropertyRental.Models {

   
   public class DataContext : DbContext {

       public DataContext(DbContextOptions<DataContext> options): base(options){

       }

        // here clare all your classes that should become a table on the DB
       public DbSet<Property> Properties {get; set;}

       
    }
}
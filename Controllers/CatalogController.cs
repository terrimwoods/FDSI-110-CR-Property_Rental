using Microsoft.AspNetCore.Mvc;
using PropertyRental.Models;
using System.Linq;

namespace PropertyRental.Controllers{

    public class CatalogController : Controller {

        private DataContext dbContext; //global variable can be used anywhere in this file

        public CatalogController(DataContext db){
            this.dbContext = db;


        }

        public IActionResult Test(){
            return View();
        }
        public IActionResult Index(){
            return View();
        }
        public IActionResult Register(){
            return View();
        }
        //  /catalog/getCatalog
        [HttpGet]

        public IActionResult GetCatalog(){
            // paginate= (send chunks of data) with linq, use skip and take

            // get the data from the DB

            // var list = dbContext.Properties.Skip(100).Take(100).OrderBy(p => p.Price).ToList(); // only skip first 100 show the next 100 pages
            var list = dbContext.Properties.Take(100).ToList();
            // return the data as a JSON object
            return Json(list);

        }
        // catalog/register property
        [HttpPost]

        public IActionResult RegisterProperty([FromBody] Property p){
            System.Console.WriteLine("user is saving something");

            // save p on database
            dbContext.Properties.Add(p); // ORM generate: insert into properties(name, rooms, bathrooms, price, sqrFeet) values('+ p.name +', ........)
            dbContext.SaveChanges();
            
            return Json(p);
        }
    }
}
package src.test.scala.hello
//Create Restaurent

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestPostRest extends Simulation {

  val httpProtocol = http
    .baseUrl("http://127.0.0.1:2003")
    .inferHtmlResources()
    .acceptHeader("application/json, text/plain, */*")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36")

  val headers_0 = Map(
    "Content-Type" -> "application/json",
    "Origin" -> "http://localhost:4222",
    "Sec-Fetch-Mode" -> "cors",
    "Sec-Fetch-Site" -> "cross-site")

  val scn = scenario("AddRestaurenntSimulation")
    .exec(
      http("PostRequest")
        .post("/restaurant/2")
        .body(StringBody(
          """{
            "libelle": "okay",
            |"matricule": "ffff",
            |"societe":{"idSociete":7701,"societeName":"Hello"},
            |"typeRestaurant":{"idTypeRestaurant":997,"nomType":"aze","pathLogo":"89bdb190-0597-489f-8baf-a7c18220dcafburger-king-vector.jpg","statut":true,"typeComportementRestaurant":0},
            |"periodeRestaurant": "MENSUEL",
            |"pays":{"idNationalite":4,"code":"DZA","libelleFR":"Algérien-ne","libelleEN":"Algerian","paysFR":"Algérie","paysEN":"Algeria","titreSejour":true,"titreTravail":true,"urlJourFeriers":null,"majeurMasculin":18,"majeurFeminin":18}
            }""".stripMargin)).asJson
        .headers(headers_0)
    )

  setUp(scn.inject(atOnceUsers(500))).protocols(httpProtocol)












}
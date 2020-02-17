//Create User
package src.test.scala.hello

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class my_test extends Simulation {

  val httpProtocol = http
    .baseUrl("http://127.0.0.1:2005")
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



  val scn = scenario("LoginSimulation")
    .exec(
      http("request_0")
        .post("/affectation/add/1")
        .body(StringBody(
          """{"idUser": 48205,
            |"nom": "yaich",
            |"prenom": "walid",
            |"email": "ThisIsMyMail@gmail.com",
            |"pseudo": "walid",
            |"affectations": null}""".stripMargin)).asJson
        .headers(headers_0)
    )

  setUp(scn.inject(atOnceUsers(3))).protocols(httpProtocol)













}
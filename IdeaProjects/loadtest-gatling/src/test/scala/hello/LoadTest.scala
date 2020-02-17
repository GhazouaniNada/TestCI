//get all society
package src.test.scala.hello

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class LoadTest extends Simulation {

  val httpProtocol = http
    .baseUrl("http://127.0.0.1:2003")
  //.inferHtmlResources()
  // .acceptHeader("*/*")
  //.acceptEncodingHeader("gzip, deflate")
  //.acceptLanguageHeader("fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7")
  //.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36")



  val headers_0 = Map(
    "Content-Type" -> "application/json",
    "Origin" -> "http://localhost:4222",
    "Sec-Fetch-Mode" -> "cors",
    "Sec-Fetch-Site" -> "cross-site")

  val scn = scenario("My-first-Scenario")
    .exec(
      http("GetHelloWorld")
        .get("/societe/")

        .headers(headers_0)

    )


  setUp(scn.inject(atOnceUsers(3)).protocols(httpProtocol))
}
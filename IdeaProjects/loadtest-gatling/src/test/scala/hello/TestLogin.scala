//login
package src.test.scala.hello

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class TestLogin extends Simulation {

  val httpProtocol = http
    .baseUrl("http://127.0.0.1:2005")
    .inferHtmlResources()
    .acceptHeader("application/json, text/plain, */*")
    .acceptEncodingHeader("gzip, deflate")
    .acceptLanguageHeader("fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36")



  object LoginPage {
    val loginProperties = csv("C:\\Users\\Toshiba\\IdeaProjects\\user-login.csv").random

    val login = feed(loginProperties).exec(http("LoginPage")
      .post("/login")
      //.formParam("email", "${email}")
      //.formParam("password", "${password}"))
      .body(StringBody("""{ "email": "${email}","password":"${password}" }""")).asJson
    )

      .pause(3)
  }



  val scenario1 = scenario("JavaMultiuserScenario")
    .exec(LoginPage.login)


  //setUp(scenario1.inject(rampUsers(10) over (10 seconds), rampUsers(2) over (10 seconds)))
  // .protocols(httpProtocol)
  // .assertions(global.successfulRequests.percent.is(100))


  setUp(scenario1.inject(atOnceUsers(800))).protocols(httpProtocol)

}
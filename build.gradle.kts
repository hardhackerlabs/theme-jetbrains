fun properties(key: String) = project.findProperty(key).toString()

plugins {
  id("java")
  id("org.jetbrains.kotlin.jvm") version "1.7.20"
  id("org.jetbrains.intellij") version "1.13.3"
  id("org.jetbrains.changelog") version "1.3.1"
}

group = "labs.hardhacker.theme"
version = "1.0-SNAPSHOT"

repositories {
  mavenCentral()
}

// Configure Gradle IntelliJ Plugin
// Read more: https://plugins.jetbrains.com/docs/intellij/tools-gradle-intellij-plugin.html
intellij {
  pluginName.set("HardHacker Theme")
  version.set("2023.1")
  type.set("IC") // Target IDE Platform

  plugins.set(listOf(/* Plugin Dependencies */))
}

changelog {
  version.set(properties("plugin.version"))
  path.set("${project.projectDir}/CHANGELOG.md")
  groups.set(emptyList())
}

tasks {
  // Set the JVM compatibility versions
  withType<JavaCompile> {
    sourceCompatibility = "17"
    targetCompatibility = "17"
  }
  withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
    kotlinOptions.jvmTarget = "17"
  }

  patchPluginXml {
    sinceBuild.set("231")
    untilBuild.set("232.*")

    version.set(properties("plugin.version"))
    changeNotes.set(provider { changelog.getLatest().toHTML() })

    val desc = """
      <p align="center">
        <a href="https://podcasts.apple.com/au/podcast/%E7%A1%AC%E5%9C%B0%E9%AA%87%E5%AE%A2/id1678465783" rel="nofollow">
          <img width="180" src="https://github.com/hardhackerlabs/themes/raw/master/media/logo/logo.png" alt="HardHacker" style="max-width: 100%;">
        </a>
      </p>
      <h1 align="center">
        HardHacker Themes
      </h1>
      <p>A visually comfortable dark theme that is suitable for prolonged use. It differs from the typical blueish dark themes and aims to express a unique style with a more futuristic color palette.</p>
      <p>The color inspiration comes from some cyberpunk-style art works. However, neon color schemes commonly seen in cyberpunk styles are not suitable for prolonged staring, thus the saturation of the colors has been reduced.</p>
    """.trimIndent()
    pluginDescription.set(desc)
  }

  signPlugin {
    certificateChainFile.set(file("cert/chain.crt"))
    privateKeyFile.set(file("cert/private.pem"))
    password.set(providers.environmentVariable("PRIVATE_KEY_PASSWORD"))
  }

  publishPlugin {
    dependsOn("patchChangelog")
    token.set(providers.environmentVariable("PUBLISH_TOKEN"))
  }
}

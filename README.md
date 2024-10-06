# Interactive Educational Platform for Learning about the Solar System and Near-Earth Objects (NEOs)

## Platform Overview

Our platform serves as an interactive hub for learning about the solar system and Near-Earth Objects (NEOs). The educational content is enriched through 3D visualizations of celestial bodies and engaging activities designed to reinforce learning. By integrating HTML5, CSS3, and JavaScript with the Vue.js framework, we provide a user-friendly interface that encourages exploration and interaction.

## NASA Data Integration

We leverage real-time data from NASA’s resources to ensure our content is both accurate and up-to-date. This data underpins our educational materials and predictive AI model, forming the backbone of the learning experience by offering users detailed information about planets, comets, and asteroids.

## Game Development

To make learning more engaging, we incorporated a 2D asteroid defense game, developed using Godot 4. This game not only adds a fun element to the platform but also serves as a tool for educational reinforcement. Players must answer true/false questions to protect Earth from incoming asteroids, combining gameplay with knowledge assessment.

## Integrating AI for NEO Insights

A standout feature of our platform is the predictive AI model, which utilizes a Recurrent Neural Network (RNN) with Long Short-Term Memory (LSTM) capabilities. By inputting a date and specific NEO family characteristics, users can receive significant predictive data. For example, entering information might yield an output like:

```json
{
    "family_name": "BP",
    "year": 2035,
    "prediction": {
        "absolute_magnitude": 15.978374481201172,
        "estimated_diameter_min": 0.7815712597221136,
        "estimated_diameter_max": 3.035774454474449,
        "is_potentially_hazardous": 0.0
    }
}


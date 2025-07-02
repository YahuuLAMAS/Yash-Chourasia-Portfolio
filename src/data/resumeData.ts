import { Experience, Skill, Education, Project, ContactInfo } from '../types';

export const personalInfo = {
  name: "Yash Chourasia",
  title: "Electronics & Communication Engineering Student",
  summary: "Passionate B.Tech student specializing in Electronics and Communication Engineering with deep interest in AI, IoT, and embedded systems. I enjoy building smart solutions that connect the physical and digital worlds, combining hardware expertise with software innovation.",
  avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=2"
};

export const contactInfo: ContactInfo = {
  email: "yash.chourasia@email.com",
  phone: "+91 98765 43210",
  linkedin: "https://www.linkedin.com/in/yash-chourasia-912ba624b/",
  github: "https://github.com/YahuuLAMAS",
  location: "Indore, Madhya Pradesh"
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Eduexpose",
    position: "AI & Machine Learning Intern",
    duration: "2024",
    location: "Remote",
    description: [
      "Completed certified AIML internship focusing on practical applications",
      "Worked extensively with Python for machine learning implementations",
      "Applied AI concepts to real-world projects and case studies",
      "Gained hands-on experience with data preprocessing and model training"
    ],
    technologies: ["Python", "TensorFlow", "Machine Learning", "Data Analysis"]
  },
  {
    id: "2",
    company: "SD Bansal College of Technology",
    position: "Electronics & Communication Engineering Student",
    duration: "2022 - 2026",
    location: "Indore, MP",
    description: [
      "Pursuing B.Tech in Electronics and Communication Engineering",
      "Specialized coursework in embedded systems and IoT applications",
      "Active participation in technical projects and competitions",
      "Led 7-member team in intercollegiate basketball competitions"
    ],
    technologies: ["C/C++", "Arduino", "ESP32", "Circuit Design", "Digital Electronics"]
  }
];

export const skills: Skill[] = [
  // Programming
  { name: "Python", level: 85, category: "frontend" },
  { name: "C++", level: 80, category: "frontend" },
  { name: "C", level: 75, category: "frontend" },
  { name: "HTML", level: 70, category: "frontend" },
  
  // IoT & Embedded
  { name: "Arduino", level: 90, category: "backend" },
  { name: "ESP32", level: 85, category: "backend" },
  { name: "Sensor Integration", level: 80, category: "backend" },
  { name: "Circuit Design", level: 75, category: "backend" },
  
  // ML & Tools
  { name: "TensorFlow", level: 75, category: "tools" },
  { name: "OpenCV", level: 70, category: "tools" },
  { name: "Blynk Platform", level: 80, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
  { name: "Microsoft Excel/VBA", level: 70, category: "tools" },
  
  // Soft Skills
  { name: "Problem Solving", level: 90, category: "soft" },
  { name: "Teamwork", level: 95, category: "soft" },
  { name: "Communication", level: 85, category: "soft" },
  { name: "Attention to Detail", level: 90, category: "soft" }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "SD Bansal College of Technology",
    degree: "Bachelor of Technology",
    field: "Electronics and Communication Engineering",
    year: "2026",
    gpa: "Current Student"
  },
  {
    id: "2",
    institution: "Eduexpose",
    degree: "Certificate",
    field: "AI & Machine Learning",
    year: "2024"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Handwritten Digit Recognition",
    description: "AI model trained on MNIST dataset using TensorFlow for digit recognition. Implemented preprocessing and normalization techniques, tested with hand-drawn images using OpenCV and Matplotlib for improved prediction accuracy.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Matplotlib", "NumPy", "MNIST"],
    githubUrl: "https://github.com/YahuuLAMAS/digit-recognition",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    codeSnippet: `import os
import cv2
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf

mnist = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()

x_train = tf.keras.utils.normalize(x_train, axis=1)
x_test = tf.keras.utils.normalize(x_test, axis=1)

model = tf.keras.models.Sequential()
model.add(tf.keras.layers.Flatten(input_shape=(28, 28)))
model.add(tf.keras.layers.Dense(128, activation='relu'))
model.add(tf.keras.layers.Dense(128, activation='relu'))
model.add(tf.keras.layers.Dense(10, activation='softmax'))

model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
model.fit(x_train, y_train, epochs=3)

model.save('handwritten.keras')

image_number = 1
while os.path.isfile(f"digits/digit{image_number}.png"):
    try:
        img = cv2.imread(f"digits/digit{image_number}.png")[:,:,0]
        img = np.invert(np.array([img]))
        img = img / 255.0
        prediction = model.predict(img)
        print(f"This digit is probably a {np.argmax(prediction)}")
        plt.imshow(img[0], cmap=plt.cm.binary)
        plt.show()
    except:
        print("ERROR!")
    finally:
        image_number += 1`
  },
  {
    id: "2",
    title: "Robo Grip – IoT Robotic Gripper",
    description: "Bluetooth-controlled robotic arm with servo motors, Arduino Uno, and PCA9685 driver. Features multi-axis control and wireless operation, designed for precise object handling in automation setups.",
    technologies: ["Arduino", "Servo Motors", "PCA9685", "Bluetooth", "C++", "Robotics"],
    githubUrl: "https://github.com/YahuuLAMAS/robo-grip",
    imageUrl: "/projects/WhatsApp Image 2025-07-03 at 02.12.33_3ffeed70.jpg"
  },
  {
    id: "3",
    title: "Smart Electricity Energy Meter",
    description: "IoT-based energy monitoring system using ESP32, voltage and current sensors (ZMPT101B & SCT-013), and Blynk platform. Monitors real-time power consumption and sends data to mobile app without physical LCD display.",
    technologies: ["ESP32", "ZMPT101B", "SCT-013", "Blynk", "IoT", "Energy Monitoring"],
    githubUrl: "https://github.com/YahuuLAMAS/smart-energy-meter",
    imageUrl: "/projects/circuit.jpg"
  }
];
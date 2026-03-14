📡 **Climate Control Project Tech Stack**

### 🔧 **Hardware (ESP32)**
- **Microcontroller:** ESP32
- **Sensors:** DHT11 (temperature/humidity)
- **Display:** SSD1306 (OLED, 128x64, SPI interface)
- **Indication:** Built-in LED

### 💻 **Software (Arduino/C++)**
- **Libraries:** Adafruit GFX/SSD1306, DHT, PubSubClient, ArduinoJson
- **Protocols:** MQTT for data transmission, Wi-Fi for communication
- **Functionality:** Reading sensors, displaying on OLED, sending JSON, LED control via MQTT

### 🌐 **Server Side (VPS)**
- **MQTT Broker:** Mosquitto (port 1883)
- **WebSocket proxy:** For browser connection (port 9001 → /mqtt)
- **OS:** Linux (Ubuntu/Debian)

### 🖥️ **Web Interface**
- **Frontend:** HTML5, CSS3
- **MQTT in browser:** MQTT.js (WebSocket)
- **Storage:** localStorage for data caching
- **Responsive design:** CSS Grid/Flexbox

### 📦 **Data Format**
- **JSON structure:**
```json
{
  "device": "esp32_1",
  "temperature": 25.5,
  "humidity": 60.2
}
```

### 🔄 **Workflow**
`Sensors → ESP32 → MQTT → Broker → Web client/Python script`

<h1>React Countries Project 🌍</h1>

<p>This repository contains a React project that interacts with the <a href="https://restcountries.com/">REST Countries API</a>. The project is designed to display information about different countries, offering various functionalities to view, filter, and interact with country data.</p>

<h2>Overview</h2>

<p>The project consists of several key components and features, organized into different routes:</p>

<h3>Home Page</h3>

<p>The home page displays the <strong>Table Component</strong> along with various functionalities that need to be implemented. This will serve as the main route.</p>

<h3>Table Component</h3>

<p>The Table Component will display all countries with the following columns:</p>

<ul>
  <li><strong>Flag</strong></li>
  <li><strong>Name</strong></li>
  <li><strong>Official Name</strong></li>
  <li><strong>Population</strong></li>
  <li><strong>Capital</strong></li>
</ul>

<p>Additionally, the table will include:</p>

<ul>
  <li>A column with a delete button for each country, i.e., one button per row.</li>
  <li>Functionality in the column headers to allow sorting by name and population.</li>
  <li>A filter to search for a country by name.</li>
  <li>A button to restore the table to its initial state, recovering any deleted rows.</li>
  <li>A button to color the background of even rows with one color and odd rows with another.</li>
</ul>

<h3>Country Profile Component</h3>

<p>This component displays detailed information about a country on a separate page with the following route: <code>/&lt;country&gt;</code>. The design and structure of the information displayed are flexible. Users can access this page by clicking on the country flag in the table.</p>

<h3>Error 404 Route</h3>

<p>An error 404 page should be implemented to handle invalid URLs using React Router.</p>

<h2>Additional Requirements</h2>

<ul>
  <li>The Table Component should be built with custom HTML and CSS structures; no component libraries should be used.</li>
  <li>The project will be created using <strong>Vite</strong>.</li>
  <li>Emphasis will be placed on component reusability, clean code, code structure, design, and functionality.</li>
</ul>

<h2>Installation</h2>

<ol>
  <li>Clone the repository:</li>
  <pre><code>git clone https://github.com/AndreaCCarrera/paises-ac.git</code></pre>
  <li>Navigate to the project directory:</li>
  <pre><code>cd react-countries-project</code></pre>
  <li>Install the dependencies:</li>
  <pre><code>npm install</code></pre>
  <li>Run the development server:</li>
  <pre><code>npm run dev</code></pre>
  <li>Open your browser and go to <code>http://localhost:5173</code> to view the project.</li>
</ol>

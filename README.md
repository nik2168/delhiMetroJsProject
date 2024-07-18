### Explanation:

1. **Classes and Objects**: The `Line` class represents a metro line with its properties (`stations`, `name`, `distance`, `time`, `interchanges`). The `Metro` class manages a collection of `Line` objects.

2. **Data Structures**: `graph` is used as an adjacency list to represent connections between metro stations. `stationsMap` maps station names to their details (`name` and `dest`). `allStations` maintains a list of all station details.

3. **Functions**: 
   - `makeUppercase(s)`: Converts a string to uppercase.
   - `getEdges(i, j)`: Updates the graph with bidirectional edges between stations `i` and `j`.
   - `finder(src, dst)`: Implements Dijkstra's algorithm to find the shortest path between `src` and `dst` stations.

4. **Main Function (`main()`)**: 
   - Initializes metro lines (`blueline`, `redline`, etc.) and adds them to the `Metro` object `m`.
   - Constructs the `graph` using station details from `m`.
   - Takes user input for the starting and ending stations (`from` and `to`).
   - Calls `finder()` to find the shortest path and prints the results (`totalTime`, `totalDistance`, and the path taken).

5. **Execution**: The `main()` function sets up the metro lines, constructs the graph, and interacts with the user to provide route information based on shortest time.

This JavaScript code should be functional and equivalent to the provided C++ code, facilitating navigation and route calculation within a simulated metro system.
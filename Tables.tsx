class RestaurantTable {
    tableNumber: number;
    capacity: number;
    isOccupied: boolean;

    constructor(tableNumber: number, capacity: number) {
        this.tableNumber = tableNumber;
        this.capacity = capacity;
        this.isOccupied = false; // table starts as not populated
    }
}


class HostTableView {
    tables: RestaurantTable[];
    // Host POV
    constructor() {
        this.tables = [];
    }

    // adds table
    addTable(tableNumber: number, capacity: number) {
        const newTable = new RestaurantTable(tableNumber, capacity);
        this.tables.push(newTable);
    }

    // removes table
    removeTable(tableNumber: number) {
        this.tables = this.tables.filter(table => table.tableNumber !== tableNumber);
    }

    // table is populated
    occupyTable(tableNumber: number) {
        const table = this.tables.find(table => table.tableNumber === tableNumber);
        if (table) {
            table.isOccupied = true;
        } else {
            console.log(`Table ${tableNumber} not found.`);
        }
    }

    // Mempty table, available to be in qeueu
    vacateTable(tableNumber: number) {
        const table = this.tables.find(table => table.tableNumber === tableNumber);
        if (table) {
            table.isOccupied = false;
        } else {
            console.log(`Table ${tableNumber} not found.`);
        }
    }

    //show all tables, I think we can keep this updated for viewership
    displayTableStatus() {
        console.log("Table Status:");
        this.tables.forEach(table => {
            console.log(`Table ${table.tableNumber}: Capacity - ${table.capacity}, Occupied - ${table.isOccupied ? 'Yes' : 'No'}`);
        });
    }
}

// ========================================================
// Kaboom's Kitchen - menu.ts
// WEEK 11: Simple TypeScript Classes, Interfaces & Functions
// ========================================================

// 1. TypeScript Interface: Defines the shape/contract of a Menu Item
interface MenuItem {
    id: number;
    name: string;
    category: string;
    price: number;
    isSpicy: boolean;
}

// 2. TypeScript Interface: Defines a Table Booking record
interface TableBooking {
    customerName: string;
    date: string;
    time: string;
    guests: number;
}

// 3. TypeScript Class: Encapsulates Menu Management logic
class RestaurantMenu {
    // Class property with type annotation
    private items: MenuItem[];

    // Constructor to initialize default restaurant menu items
    constructor() {
        this.items = [
            { id: 1, name: "Fiery Kaboom Wings", category: "Starters", price: 8.99, isSpicy: true },
            { id: 2, name: "Garlic Herb Bruschetta", category: "Starters", price: 6.49, isSpicy: false },
            { id: 3, name: "Paneer Sizzler Platter", category: "Main Course", price: 13.99, isSpicy: true },
            { id: 4, name: "Volcano Choco Brownie", category: "Dessert", price: 5.99, isSpicy: false }
        ];
    }

    // Method to add a new item
    public addItem(newItem: MenuItem): void {
        this.items.push(newItem);
    }

    // Method returning an array of MenuItem objects
    public getAllItems(): MenuItem[] {
        return this.items;
    }

    // Method with parameter typing and return type
    public filterByCategory(categoryName: string): MenuItem[] {
        return this.items.filter(item => item.category.toLowerCase() === categoryName.toLowerCase());
    }

    // Method to calculate total price for selected item IDs
    public calculateTotal(selectedIds: number[]): number {
        let total: number = 0;
        for (const id of selectedIds) {
            const foundItem = this.items.find(item => item.id === id);
            if (foundItem) {
                total += foundItem.price;
            }
        }
        return total;
    }
}

// 4. Standalone TypeScript Function: Formats numeric currency
function formatCurrency(amount: number): string {
    return "$" + amount.toFixed(2);
}

// 5. Standalone TypeScript Function: Creates a booking confirmation string
function createBookingSummary(booking: TableBooking): string {
    return `Reservation confirmed for ${booking.customerName} on ${booking.date} at ${booking.time} (${booking.guests} guests).`;
}

// Demonstration / execution in browser environment
const kaboomMenu = new RestaurantMenu();
console.log("Total Menu Items:", kaboomMenu.getAllItems().length);
console.log("Starters:", kaboomMenu.filterByCategory("Starters"));
console.log("Total for items #1 and #3:", formatCurrency(kaboomMenu.calculateTotal([1, 3])));

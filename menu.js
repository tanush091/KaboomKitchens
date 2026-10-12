// ========================================================
// Kaboom's Kitchen - menu.js (Compiled JavaScript from menu.ts)
// WEEK 11: TypeScript Compilation Target for Browser Execution
// ========================================================

// Transpiled RestaurantMenu class
var RestaurantMenu = /** @class */ (function () {
    function RestaurantMenu() {
        this.items = [
            { id: 1, name: "Fiery Kaboom Wings", category: "Starters", price: 8.99, isSpicy: true },
            { id: 2, name: "Garlic Herb Bruschetta", category: "Starters", price: 6.49, isSpicy: false },
            { id: 3, name: "Paneer Sizzler Platter", category: "Main Course", price: 13.99, isSpicy: true },
            { id: 4, name: "Volcano Choco Brownie", category: "Dessert", price: 5.99, isSpicy: false }
        ];
    }
    RestaurantMenu.prototype.addItem = function (newItem) {
        this.items.push(newItem);
    };
    RestaurantMenu.prototype.getAllItems = function () {
        return this.items;
    };
    RestaurantMenu.prototype.filterByCategory = function (categoryName) {
        return this.items.filter(function (item) {
            return item.category.toLowerCase() === categoryName.toLowerCase();
        });
    };
    RestaurantMenu.prototype.calculateTotal = function (selectedIds) {
        var total = 0;
        var _loop_1 = function (id) {
            var foundItem = this_1.items.find(function (item) { return item.id === id; });
            if (foundItem) {
                total += foundItem.price;
            }
        };
        var this_1 = this;
        for (var _i = 0, selectedIds_1 = selectedIds; _i < selectedIds_1.length; _i++) {
            var id = selectedIds_1[_i];
            _loop_1(id);
        }
        return total;
    };
    return RestaurantMenu;
}());

function formatCurrency(amount) {
    return "$" + amount.toFixed(2);
}

function createBookingSummary(booking) {
    return "Reservation confirmed for " + booking.customerName + " on " + booking.date + " at " + booking.time + " (" + booking.guests + " guests).";
}

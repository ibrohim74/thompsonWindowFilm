import React from 'react';
import  './helpItemPage.css'
const Xaraktristika = ({data}) => {
    return (
        <table className="table-fill">
            <tbody className="table-hover">
            <tr>
                <td className="text-left">Производитель</td>
                <td className="text-left">Daytona</td>

            </tr>
            <tr>
                <td className="text-left">Артикул/Цвет производителя</td>
                <td className="text-left">40569</td>


            </tr>
            <tr>
                <td className="text-left">Материал</td>
                <td className="text-left">Полиуретан</td>
            </tr>
            <tr>
                <td className="text-left">Поверхность</td>
                <td className="text-left">Глянцевая</td>
            </tr>
            <tr>
                <td className="text-left">Тип поверхности</td>
                <td className="text-left">Глянцевая</td>

            </tr>
            <tr>
                <td className="text-left">Цвет</td>
                <td className="text-left">Прозрачный</td>


            </tr>
            <tr>
                <td className="text-left">Длина рулона, м </td>
                <td className="text-left">15</td>


            </tr>
            <tr>
                <td className="text-left">Ширина, см</td>
                <td className="text-left">152</td>


            </tr>
            </tbody>

        </table>
    );
};

export default Xaraktristika;
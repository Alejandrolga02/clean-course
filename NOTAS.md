# Notas tomadas durante el curso

## Deuda técnica y Clean Code

La deuda técnica es la falta de calidad en el codigo que repercutirá en costos futuros.

La mala calidad en el software siempre la acaba pagando o asumiendo alguien, ya sea el cliente, el proovedor con recurso o el propio desarrollador dedicando tiempo a refactorizar o malgastando tiempo programando sobre un sistema frágil.

La deuda técnica muchas veces es inevitable y esta tiene costos monetarios por las siguientes razones:

- Tiempo en realizar matenimientos.
- Tiempo en refactorizar código.
- Tiempo en comprender el código.
- Tiempo adicional en capacitar a un tercero del código.

### Esquema de deuda técnica de Martin Fowler

- Imprudente y deliverada
Esto suele crear un proyecto poco robusto y poco tolerante al cambio. Suele suceder en proyectos donde el plazo de entrega es muy corto.
- Imprudente e inadvertida
Esta es el tipo de deuda más peligrosa y suele suceder en los desarrolladores juniors.
- Prudente y deliverada
Esto suele ser lo mas común, suele suceder en un proyecto donde el plazo de entrega es muy corto pero se suelen dejar cosas pendientes a refactorizar en un futuro.
- Prudente e inadvertida
Es el momento durante el proyecto cuando te cae el 20 que la forma en la que implementaste las cosas realmente no fue la mejor y porque ya te llego la deuda tecnica y empiezas a barajar opciones para refactorizar tu código o seguir adelante así.

Caer en la deuda técnica es normal y en muchos casos inevitable pero lo que hace a un buen programador es buscar la forma de pagarla.

### Refactorización

Es el proceso el cual tiene como objetivo mejorar el código sin alterar su comportamiento para que este sea mas entendible y tolerante a cambios basicamente la forma de pagar la forma de pagar la deuda técnica.

Para realizar una refactorización fuerte y que esta no falle, es necesario contar con pruebas automaticas para asegurarnos que no hayan resultados inesperados.

Cuando no se hacen pruebas automaticas se suele incurrir en el famoso **"Si funciona, no lo toques"** lo cual es producto de no tener un código fuerte y tolerante a cambios.

### Clean code

Clean code es aquel que se ha escrito con la intención de que otra persona o tu mismo lo entienda en el futuro, este debería ser simple y directo, deberia poder leerse con la misma facilidad que un texto bien escrito.

### Consideraciones para funciones

- Deben ser simples
- Su tamaño debe ser reducido
- Menos de 20 lineas
- Evitar el uso del "else"
- Priorizar el uso de la condicional ternaria
- Evitar anidaciones innecesarias
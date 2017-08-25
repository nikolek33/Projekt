document.addEventListener("DOMContentLoaded", function(event) { 

    $.ajax({
        url: 'https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers', 
        headers: {"X-Mashape-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw"},
        type: 'GET', 
        dataType: 'json',
    }).done(function(data){
        $("#loader").remove();
        var tab = data.data.topscorers;
        tab=tab.filter(function(x,i){ return i < 10; })
        tab.map(function(v,i,a){

            var row =  `<tr> 
                <td class='left'> ${(i+1)} </td>
                <td class='middle'> ${v.fullname} </td>
                <td class='right'> ${v.goals} </td>
                </tr>`;

            $("tbody").append(row);

        });
    }).fail(function(jqXHR, textStatus, errorThrown){
        alert(errorThrown);
        $("#loader").remove();
    });
});

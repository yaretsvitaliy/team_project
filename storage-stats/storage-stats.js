$(document).ready(function () {
    $.get('/GetStorageInfo', function (res) {
        var storageInfo = JSON.parse(res);

        Morris.Donut({
            element: 'storage-stats__graph-diagram-stats',
            data: [
                {
                    value: (storageInfo.Audio.SizeInBytes / 1048576).toFixed(2) + ' Mb',
                    label: storageInfo.Audio.Count + ' files', color: '#4daf7b'
                },
                {
                    value: (storageInfo.Other.SizeInBytes / 1048576).toFixed(2) + ' Mb',
                    label: storageInfo.Other.Count + ' files', color: '#f4ede7'
                },
                {
                    value: (storageInfo.Photo.SizeInBytes / 1048576).toFixed(2) + ' Mb',
                    label: storageInfo.Photo.Count + ' files', color: '#ebc85e'
                },
                {
                    value: (storageInfo.Video.SizeInBytes / 1048576).toFixed(2) + ' Mb',
                    label: storageInfo.Video.Count + ' files', color: '#e55e3a'
                }
            ],
            backgroundColor: '#fff',
            valueColor: '#8e8071',
            formatter: function (x) { return x }
        });

        $("#percent-audio").html(storageInfo.Audio.PercentSizeInBytes.toFixed(0) + "%");
        $("#percent-video").html(storageInfo.Video.PercentSizeInBytes.toFixed(0) + "%");
        $("#percent-photo").html(storageInfo.Photo.PercentSizeInBytes.toFixed(0) + "%");

    });
});


